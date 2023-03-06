"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrationResourceArn = exports.validatePatternSupported = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_stepfunctions_1 = require("aws-cdk-lib/aws-stepfunctions");
/**
 * Verifies that a validation pattern is supported for a service integration
 *
 */
function validatePatternSupported(integrationPattern, supportedPatterns) {
    if (!supportedPatterns.includes(integrationPattern)) {
        throw new Error(`Unsupported service integration pattern. Supported Patterns: ${supportedPatterns}. Received: ${integrationPattern}`);
    }
}
exports.validatePatternSupported = validatePatternSupported;
/**
 * Suffixes corresponding to different service integration patterns
 *
 * Key is the service integration pattern, value is the resource ARN suffix.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html
 */
const resourceArnSuffix = {
    [aws_stepfunctions_1.IntegrationPattern.REQUEST_RESPONSE]: "",
    [aws_stepfunctions_1.IntegrationPattern.RUN_JOB]: ".sync",
    [aws_stepfunctions_1.IntegrationPattern.WAIT_FOR_TASK_TOKEN]: ".waitForTaskToken",
};
function integrationResourceArn(service, api, integrationPattern) {
    if (!service || !api) {
        throw new Error("Both 'service' and 'api' must be provided to build the resource ARN.");
    }
    return (`arn:${aws_cdk_lib_1.Aws.PARTITION}:states:::${service}:${api}` +
        (integrationPattern ? resourceArnSuffix[integrationPattern] : ""));
}
exports.integrationResourceArn = integrationResourceArn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2stdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWtDO0FBQ2xDLHFFQUFtRTtBQUVuRTs7O0dBR0c7QUFDSCxTQUFnQix3QkFBd0IsQ0FDdEMsa0JBQXNDLEVBQ3RDLGlCQUF1QztJQUV2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7UUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FDYixnRUFBZ0UsaUJBQWlCLGVBQWUsa0JBQWtCLEVBQUUsQ0FDckgsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQVRELDREQVNDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxpQkFBaUIsR0FBdUM7SUFDNUQsQ0FBQyxzQ0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7SUFDekMsQ0FBQyxzQ0FBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPO0lBQ3JDLENBQUMsc0NBQWtCLENBQUMsbUJBQW1CLENBQUMsRUFBRSxtQkFBbUI7Q0FDOUQsQ0FBQztBQUVGLFNBQWdCLHNCQUFzQixDQUNwQyxPQUFlLEVBQ2YsR0FBVyxFQUNYLGtCQUF1QztJQUV2QyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0VBQXNFLENBQ3ZFLENBQUM7S0FDSDtJQUNELE9BQU8sQ0FDTCxPQUFPLGlCQUFHLENBQUMsU0FBUyxhQUFhLE9BQU8sSUFBSSxHQUFHLEVBQUU7UUFDakQsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2xFLENBQUM7QUFDSixDQUFDO0FBZEQsd0RBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd3MgfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7IEludGVncmF0aW9uUGF0dGVybiB9IGZyb20gXCJhd3MtY2RrLWxpYi9hd3Mtc3RlcGZ1bmN0aW9uc1wiO1xuXG4vKipcbiAqIFZlcmlmaWVzIHRoYXQgYSB2YWxpZGF0aW9uIHBhdHRlcm4gaXMgc3VwcG9ydGVkIGZvciBhIHNlcnZpY2UgaW50ZWdyYXRpb25cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhdHRlcm5TdXBwb3J0ZWQoXG4gIGludGVncmF0aW9uUGF0dGVybjogSW50ZWdyYXRpb25QYXR0ZXJuLFxuICBzdXBwb3J0ZWRQYXR0ZXJuczogSW50ZWdyYXRpb25QYXR0ZXJuW11cbikge1xuICBpZiAoIXN1cHBvcnRlZFBhdHRlcm5zLmluY2x1ZGVzKGludGVncmF0aW9uUGF0dGVybikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5zdXBwb3J0ZWQgc2VydmljZSBpbnRlZ3JhdGlvbiBwYXR0ZXJuLiBTdXBwb3J0ZWQgUGF0dGVybnM6ICR7c3VwcG9ydGVkUGF0dGVybnN9LiBSZWNlaXZlZDogJHtpbnRlZ3JhdGlvblBhdHRlcm59YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBTdWZmaXhlcyBjb3JyZXNwb25kaW5nIHRvIGRpZmZlcmVudCBzZXJ2aWNlIGludGVncmF0aW9uIHBhdHRlcm5zXG4gKlxuICogS2V5IGlzIHRoZSBzZXJ2aWNlIGludGVncmF0aW9uIHBhdHRlcm4sIHZhbHVlIGlzIHRoZSByZXNvdXJjZSBBUk4gc3VmZml4LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL3N0ZXAtZnVuY3Rpb25zL2xhdGVzdC9kZy9jb25uZWN0LXRvLXJlc291cmNlLmh0bWxcbiAqL1xuY29uc3QgcmVzb3VyY2VBcm5TdWZmaXg6IFJlY29yZDxJbnRlZ3JhdGlvblBhdHRlcm4sIHN0cmluZz4gPSB7XG4gIFtJbnRlZ3JhdGlvblBhdHRlcm4uUkVRVUVTVF9SRVNQT05TRV06IFwiXCIsXG4gIFtJbnRlZ3JhdGlvblBhdHRlcm4uUlVOX0pPQl06IFwiLnN5bmNcIixcbiAgW0ludGVncmF0aW9uUGF0dGVybi5XQUlUX0ZPUl9UQVNLX1RPS0VOXTogXCIud2FpdEZvclRhc2tUb2tlblwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVncmF0aW9uUmVzb3VyY2VBcm4oXG4gIHNlcnZpY2U6IHN0cmluZyxcbiAgYXBpOiBzdHJpbmcsXG4gIGludGVncmF0aW9uUGF0dGVybj86IEludGVncmF0aW9uUGF0dGVyblxuKTogc3RyaW5nIHtcbiAgaWYgKCFzZXJ2aWNlIHx8ICFhcGkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkJvdGggJ3NlcnZpY2UnIGFuZCAnYXBpJyBtdXN0IGJlIHByb3ZpZGVkIHRvIGJ1aWxkIHRoZSByZXNvdXJjZSBBUk4uXCJcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgYGFybjoke0F3cy5QQVJUSVRJT059OnN0YXRlczo6OiR7c2VydmljZX06JHthcGl9YCArXG4gICAgKGludGVncmF0aW9uUGF0dGVybiA/IHJlc291cmNlQXJuU3VmZml4W2ludGVncmF0aW9uUGF0dGVybl0gOiBcIlwiKVxuICApO1xufVxuIl19