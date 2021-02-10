import {ApprovalPolicy} from "./ApprovalPolicy";
import {ApprovalPolicySchema} from "./schemes/ApprovalPolicy";
import {RecordsManagementPolicy} from "./RecordsManagementPolicy";
import {RecordsManagementPolicySchema} from "./schemes/RecordsManagementPolicy";
import {SynchronizationPolicy} from "./SynchronizationPolicy";
import {SynchronizationPolicySchema} from "./schemes/SynchronizationPolicy";
import {ApprovalPolicyUISchema} from "./uiSchems/ApprovalPolicy";
import {RecordsManagementPolicyUISchema} from "./uiSchems/RecordsManagementPolicy";
import {SynchronizationPolicyUISchema} from "./uiSchems/SynchronizationPolicy";

export const jsons = [
    {
        name: 'Approval Policy',
        json: ApprovalPolicy,
        schema: ApprovalPolicySchema,
        uiSchema: ApprovalPolicyUISchema,
    },
    {
        name: 'Synchronization Policy',
        json: SynchronizationPolicy,
        schema: SynchronizationPolicySchema,
        uiSchema: SynchronizationPolicyUISchema,
    },
    {
        name: 'Records Management Policy',
        json: RecordsManagementPolicy,
        schema: RecordsManagementPolicySchema,
        uiSchema: RecordsManagementPolicyUISchema,
    },
]

