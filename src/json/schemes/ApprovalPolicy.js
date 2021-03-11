import * as yup from 'yup'

// const constraints = () => yup.array().of(
//     yup.mixed().oneOf([
//         yup.object({
//             "Type": yup.string().oneOf(['Child Field Is One Of']),
//             "Name": yup.string(),
//             "Ignore Case": yup.string()
//         }),
//         yup.object({
//             "Type": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Name": yup.string(),
//             "Value": yup.string()
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Name": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Name": yup.string(),
//             "Value": yup.string(),
//             "Ignore Case": yup.string()
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Name": yup.string(),
//             "Value": yup.string(),
//             "Ignore Case": yup.string(),
//             "Delimiter": yup.string()
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Name": yup.string(),
//             "Field": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "States": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Constraints": yup.string()
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Target": yup.string(),
//             "Constraints": yup.string()
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Allow If Not Linked": yup.string(),
//             "All Linked Records Must Match": yup.string(),
//             "Record Type": yup.string(),
//             "Name": yup.string(),
//             "Values": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Allow If Not Linked": yup.string(),
//             "All Linked Records Must Match": yup.string(),
//             "Record Type": yup.string(),
//             "Name": yup.string(),
//             "Values": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Role": yup.string(),
//         }),
//         yup.object({
//             "Type": yup.string(),
//             "Roles": yup.string(),
//         }),
//     ])
// )

export const ApprovalPolicySchema = yup.object({
    "Approval Policy": yup.object({
        "Version": yup.string().required('required'),
        "Schema": yup.object({
            "ID": yup.string().url('Enter valid url').required('required'),
            "Major": yup.string().required('required'),
            "Minor": yup.string().required('required')
        }),
        "Approval Groups": yup.array().of(
            yup.mixed().oneOf([
                yup.string().required('required'),
                yup.object({
                    "Name": yup.string().required('required'),
                    "Subgroups": yup.array().of(
                        yup.string().required('required')
                    ),
                })
            ])),
        "Lock Task Order": yup.string().required('required'),
        "Route Templates": yup.array().of(
            yup.object({
                // 'Constraints':constraints(),
                "Name": yup.string().required('required'),
                "Rank": yup.string().required('required'),
                "Record Types": yup.array().of(
                    yup.string().required('required')
                ),
                'Prevent Author Approval': yup.string().required('required'),
                'Lock Task Order': yup.string().required('required'),
                "Levels": yup.array().of(
                    yup.object({
                        "Name": yup.string().required('required'),
                        "Approvers": yup.array().of(
                            yup.mixed().oneOf([
                                yup.string().required('required'),
                                yup.object({
                                    "Role": yup.string().required('required'),
                                    "Field": yup.string().required('required'),
                                    "Description": yup.string().required('required'),
                                    "Lock Task Order": yup.string().required('required'),
                                    "Delimiter": yup.string().required('required')
                                })
                            ])
                        ),
                    })
                )
            })
        )
    })
})
