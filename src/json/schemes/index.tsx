import {ApprovalPolicySchema} from "./ApprovalPolicy";
import {RecordsManagementPolicySchema} from "./RecordsManagementPolicy";
import {SynchronizationPolicySchema} from "./SynchronizationPolicy";

const Schemes = [
    {
        label:'Records Management Policy',
        value: RecordsManagementPolicySchema
    },
    {
        label:'Approval Policy for ALM',
        value: ApprovalPolicySchema
    },
    {
        label:'Synchronization Policy',
        value: SynchronizationPolicySchema
    },
]

export default Schemes
