import {ApprovalPolicySchema} from "./ApprovalPolicy";
import {RecordsManagementPolicySchema} from "./RecordsManagementPolicy";
import {SynchronizationPolicySchema} from "./SynchronizationPolicy";

export default [
    {
        name:'Approval Policy',
        schema: ApprovalPolicySchema
    },
    {
        name:'RecordsManagement Policy Schema',
        schema: RecordsManagementPolicySchema
    },
    {
        name:'Synchronization Policy Schema',
        schema: SynchronizationPolicySchema
    },
]
