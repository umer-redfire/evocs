import { APIService } from '@buf/bufbuild_connect-web_evocs_commonschema/api/v1/defs_connectweb';
import {
  CreateJobRequest,
  GetJobRequest,
} from '@buf/bufbuild_connect-web_evocs_commonschema/api/v1/defs_pb';
import { RegisterActivityPreservationCustomerRequest } from '@buf/bufbuild_connect-web_evocs_commonschema/products/v1/activitypreservation_pb';
import { PromiseClient, CallOptions } from '@bufbuild/connect-web';
import { PartialMessage } from '@bufbuild/protobuf';
import { ActivityPreservationConfig } from 'types/productConfigs/activityPreservation';

type AuthResponse = {
  access_token: string;
  token_type: string;
};
const getAuthToken = async (): Promise<string> => {
  const body = {
    client_id: process.env.AUTH0_M2M_CLIENT_ID,
    client_secret: process.env.AUTH0_M2M_CLIENT_SECRET,
    audience: process.env.AUTH0_AUDIENCE,
    grant_type: 'client_credentials',
  };

  const resp = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const { access_token }: AuthResponse = await resp.json();
  return access_token;
};

const makeAPICall = async <T>(
  endpoint: string,
  request: Record<string, unknown>
): Promise<T> => {
  const accessToken = await getAuthToken();

  const resp = await fetch(
    `${process.env.PRODUCT_RUNNER_API_URL}/api.v1.APIService/${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return (await resp.json()) as T;
};

type GetJobResponse = ReturnType<PromiseClient<typeof APIService>['getJob']>;
type CreateJobResponse = ReturnType<
  PromiseClient<typeof APIService>['createJob']
>;
type RegisterActivityPreservationCustomerResponse = ReturnType<
  PromiseClient<typeof APIService>['registerActivityPreservationCustomer']
>;

interface APIClient
  extends Omit<
    PromiseClient<typeof APIService>,
    'activityPreservationUpdate'
  > {}

class Client implements APIClient {
  async getJob(
    request: PartialMessage<GetJobRequest>,
    options?: CallOptions
  ): GetJobResponse {
    return await makeAPICall<GetJobResponse>('GetJob', request);
  }
  async createJob(
    request: PartialMessage<CreateJobRequest>,
    options?: CallOptions
  ): CreateJobResponse {
    return await makeAPICall('CreateJob', request);
  }
  async registerActivityPreservationCustomer(
    request: PartialMessage<RegisterActivityPreservationCustomerRequest>,
    options?: CallOptions
  ): RegisterActivityPreservationCustomerResponse {
    return await makeAPICall('RegisterActivityPreservationCustomer', request);
  }
}

let client: Client | undefined;

export const getProductRunnerClient = (): Client => {
  if (client == null) {
    client = new Client();
  }
  return client;
};

export const createScheduleActivityPreservationRequest = ({
  customerID,
  enabledReports,
  tenantURLs,
  customerSecretID,
  frequencyMinutes,
}: ActivityPreservationConfig): Partial<RegisterActivityPreservationCustomerRequest> => {
  return {
    customerId: BigInt(customerID),
    enabledReports: enabledReports,
    tenantUrls: tenantURLs,
    customerSecretId: customerSecretID,
    frequencyMinutes: frequencyMinutes,
  };
};
