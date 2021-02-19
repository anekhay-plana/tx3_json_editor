import * as yup from 'yup'

export const ApprovalPolicySchema = yup.object({
    "Approval Policy": yup.object({
        "Version":yup.string().required('required'),
        "Schema": yup.object({
            "ID": yup.string().url('Enter valid url').required('required'),
            "Major": yup.string().required('required'),
            "Minor": yup.string().required('required')
        }),
        "Approval Groups": yup.array().of(
            yup.string().required('required')
        ),
        "Route Templates": yup.array().of(
            yup.object({
                "Name": yup.string().required('required'),
                "Rank": yup.string().required('required'),
                "Record Types":yup.array().of(
                    yup.string().required('required')
                ),
                "Levels": yup.array().of(
                    yup.object({
                        "Name": yup.string().required('required'),
                        "Approvers":yup.array().of(
                            yup.string().required('required')
                        ),
                    })

                )
            })
        )
    })
})
