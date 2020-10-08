export enum ApiCode {
    C0 = " Success Returned results successfully",
    C1 = " No Results Could not return results. The API doesn't have enough questions for your query.",
    C2 = " Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. ",
    C3 = " Token Not Found Session Token does not exist.",
    C4 = "Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.",
}