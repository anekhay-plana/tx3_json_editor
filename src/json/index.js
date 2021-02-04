import {ApprovalPolicy} from "./ApprovalPolicy";
import {ApprovalPolicySchema} from "./schemes/ApprovalPolicy";
import {RecordsManagementPolicy} from "./RecordsManagementPolicy";
import {RecordsManagementPolicySchema} from "./schemes/RecordsManagementPolicy";
import {SynchronizationPolicy} from "./SynchronizationPolicy";
import {SynchronizationPolicySchema} from "./schemes/SynchronizationPolicy";

export const jsons = [
    {
        name: 'Approval Policy',
        json: ApprovalPolicy,
        schema: ApprovalPolicySchema
    },
    {
        name: 'Synchronization Policy',
        json: SynchronizationPolicy,
        schema: SynchronizationPolicySchema
    },
    {
        name: 'Records Management Policy',
        json: RecordsManagementPolicy,
        schema: RecordsManagementPolicySchema
    },
]

