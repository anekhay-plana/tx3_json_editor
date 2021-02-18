import {ApprovalPolicySchema} from "./schemes/ApprovalPolicy";
import {RecordsManagementPolicySchema} from "./schemes/RecordsManagementPolicy";
import {SynchronizationPolicySchema} from "./schemes/SynchronizationPolicy";
import {ApprovalPolicyUISchema} from "./uiSchems/ApprovalPolicy";
import {RecordsManagementPolicyUISchema} from "./uiSchems/RecordsManagementPolicy";
import {SynchronizationPolicyUISchema} from "./uiSchems/SynchronizationPolicy";

export const jsons = [
    {
        name: 'Approval Policy',
        schema: ApprovalPolicySchema,
        uiSchema: ApprovalPolicyUISchema,
    },
    {
        name: 'Synchronization Policy',
        schema: SynchronizationPolicySchema,
        uiSchema: SynchronizationPolicyUISchema,
    },
    {
        name: 'Records Management Policy',
        schema: RecordsManagementPolicySchema,
        uiSchema: RecordsManagementPolicyUISchema,
    },
]

