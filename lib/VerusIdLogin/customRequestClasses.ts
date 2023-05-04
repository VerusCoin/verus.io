import { primitives } from 'verusid-ts-client'

export class GetVdxfidRequest extends primitives.ApiRequest {
  vdxfidString: string
  constructor(chain: string, vdxfidString: string) {
    super(chain, 'getvdxfid')
    this.vdxfidString = vdxfidString
  }
  getParams(): primitives.RequestParams {
    const params = [this.vdxfidString]
    return params.filter((x) => x != null)
  }

  static fromJson(object: primitives.ApiPrimitiveJson): GetVdxfidRequest {
    return new GetVdxfidRequest(
      object.chain as string,
      object.vdxfidString as string
    )
  }

  toJson(): primitives.ApiPrimitiveJson {
    return {
      chain: this.chain,
      vdxfidString: this.vdxfidString,
    }
  }
}

export class GetVdxfidResponse extends primitives.ApiResponse {
  constructor(result: {
    vdxfid: string
    indexid: string
    hash160result: string
    qualifiedname: { namespace: string; name: string }
    bounddata: {
      vdxfkey: string
      indexnum: number
    }
  }) {
    super(result)
  }
}
