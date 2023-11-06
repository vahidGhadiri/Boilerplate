import { generalConstants } from "@constants";

interface RequestParams {
  method: "POST" | "GET" | "DELETE" | "PUT";
  endpointUrl?: string;
  body?: unknown;
}

interface GeneralDomainService {
  domainUrl: string;
}

export type ErrorResponse = {
  httpStatusCode: number;
  status?: number;
  message: string;
};

abstract class Http<DomainService extends GeneralDomainService> {
  private url: string;
  private domainService: DomainService;

  private errorGenerator(errorObject: ErrorResponse): ErrorResponse {
    const emptyErrorMessage = generalConstants.serviceErrorMessage;
    if (!errorObject?.message?.trim()) {
      errorObject.message = emptyErrorMessage;
    }
    throw errorObject;
  }

  public async request({
    endpointUrl,
    method,
    body,
  }: RequestParams): Promise<any> {
    try {
      const options = {
        timeout: 300_000,
        headers: {
          Content_Type: "application/json",
        },
      };
      const controller = new AbortController();
      this.url = `${process.env.REACT_APP_BASE_URL}${this.domainService["domainUrl"]}${endpointUrl}`;
      const requestId = setTimeout(() => controller.abort(), options.timeout);

      return fetch(this.url, {
        body: JSON.stringify(body),
        method,
        ...options,
      }).then((res) => {
        if (res.ok) {
          return res;
        } else {
          this.errorGenerator({
            httpStatusCode: res.status,
            message: res.statusText,
            status: res.status,
          });
        }
        clearTimeout(requestId);
      });
    } catch (error) {
      throw error;
    }
  }
}

export default Http;
