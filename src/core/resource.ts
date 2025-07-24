// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Rtctest } from '../client';

export abstract class APIResource {
  protected _client: Rtctest;

  constructor(client: Rtctest) {
    this._client = client;
  }
}
