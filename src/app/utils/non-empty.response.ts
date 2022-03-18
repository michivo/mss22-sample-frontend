export class NonEmptyResponse<T> {
  constructor(
    public success: boolean,
    public errorMessage: string,
    public data?: T,
  ) {
  }
}