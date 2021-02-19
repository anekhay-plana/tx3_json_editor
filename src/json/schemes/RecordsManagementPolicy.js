import * as yup from 'yup'

export const RecordsManagementPolicySchema = yup.object({
    "Records Management Policy": yup.object({
        "Version": yup.string().required('required'),
        "Locations": yup.object({
            "ID": yup.string().url('Enter valid url').required('required'),
            "Major": yup.string().number('Only numbers').required('required'),
            "Minor": yup.string().number('Only numbers').required('required')
        }),
        "Record Types": yup.array().of(
            yup.object({
                "Name": yup.string().required('required'),
                "Definitions": yup.array().of(
                    yup.object({
                        "Systems":yup.array().of(
                            yup.string.required('required')
                        ),
                        "Aliases":yup.array().of(
                            yup.object({
                                "Policy Field": yup.string.required('required'),
                                "System Field":yup.string.required('required')
                            })
                        ),
                        "Item Types":yup.array().of(
                            yup.string.required('required')
                        ),
                        "Singular Name": yup.string().required('required'),
                        "Plural Name": yup.string().required('required'),
                        "Ownership Description": yup.string().required('required'),
                        "Content Originator": yup.string().required('required'),
                    })
                ),
                "Fields": yup.array().of(
                    yup.object({
                        "Name": yup.string().required('required'),
                        "Is Data": yup.string().required('required')
                    })
                )
            })
        )
    })
})
