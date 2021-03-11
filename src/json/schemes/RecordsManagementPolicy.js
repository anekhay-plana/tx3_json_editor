import * as yup from 'yup'

export const RecordsManagementPolicySchema = yup.object({
    "Records Management Policy": yup.object({
        "Version": yup.string().required('required'),
        "Schema": yup.object({
            "ID": yup.string().url('Enter valid url').required('required'),
            "Major": yup.string().required('required'),
            "Minor": yup.string().required('required')
        }),
        "Record Types": yup.array().of(
            yup.object({
                "Name": yup.string().required('required'),
                "Definitions": yup.array().of(
                    yup.object({
                        "Systems": yup.array().of(
                            yup.string().required('required')
                        ),
                        "Aliases": yup.array().of(
                            yup.object({
                                "Policy Field": yup.string().required('required'),
                                "System Field": yup.string().required('required')
                            })
                        ),
                        "Item Types": yup.array().of(
                            yup.string().required('required')
                        ),
                        "Singular Name": yup.string().required('required'),
                        "Plural Name": yup.string().required('required'),
                        "Ownership Description": yup.string().required('required'),
                        "Content Originator": yup.string().required('required'),
                        'Details': yup.array().of(
                            yup.object({
                                "Default": yup.string().required('required'),
                                "Fields": yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Actions": yup.array().of(
                                    yup.string().required('required')
                                )
                            })
                        ),
                    })
                ),
                "Default Route Template": yup.string().required('required'),
                'Allow Verify Signatures': yup.string().required('required'),
                "Editors": yup.array().of(
                    yup.string().required('required')
                ),
                'State Field': yup.string().required('required'),
                "States": yup.array().of(
                    yup.object({
                        "Name": yup.string().required('required'),
                        "Default": yup.string().required('required'),
                        "Prerequisites": yup.array().of(
                            yup.object({
                                "Constraints": yup.array().of(
                                    yup.object({
                                        "Type": yup.string().required('required'),
                                        "Name": yup.string().required('required'),
                                        "Values": yup.array().of(
                                            yup.string().required('required')
                                        )
                                    })
                                )
                            })
                        ),
                        'Field Updates': yup.array().of(
                            yup.object({
                                'Name': yup.string().required('required'),
                                'Value': yup.string().required('required'),
                            })
                        ),
                        'Edit Rules': yup.array().of(
                            yup.object({
                                'Is Editable': yup.string().required('required'),
                                'Roles': yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Constraints": yup.array().of(
                                    yup.object({
                                        "Type": yup.string().required('required'),
                                        "Name": yup.string().required('required'),
                                        "Values": yup.array().of(
                                            yup.string().required('required')
                                        )
                                    })
                                )
                            })
                        ),
                        'Is Editable': yup.string().required('required'),
                        'Field Exceptions':yup.array().of(
                            yup.object({
                                'Is Editable': yup.string().required('required'),
                                "Fields": yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Roles": yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Constraints": yup.array().of(
                                    yup.object({
                                        "Type": yup.string().required('required'),
                                        "Name": yup.string().required('required'),
                                        "Values": yup.array().of(
                                            yup.string().required('required')
                                        )
                                    })
                                )
                            })
                        ),
                        'Action Exceptions':  yup.array().of(
                            yup.object({
                                'Is Allowed': yup.string().required('required'),
                                "Actions": yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Roles": yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Constraints": yup.array().of(
                                    yup.object({
                                        "Type": yup.string().required('required'),
                                        "Name": yup.string().required('required'),
                                        "Values": yup.array().of(
                                            yup.string().required('required')
                                        )
                                    })
                                )
                            })
                        )
                    })
                ),
                "Fields": yup.array().of(
                    yup.object({
                        "Name": yup.string().required('required'),
                        "Is Data": yup.string().required('required'),
                        'Default Value': yup.string().required('required'),
                        "Displays Signatures For": yup.array().of(
                            yup.string().required('required')
                        ),
                        "Displays Route Info For": yup.array().of(
                            yup.string().required('required')
                        ),
                        "Initialize": yup.object({
                            'Related Entity': yup.string().required('required'),
                            'Field': yup.string().required('required'),
                        }),
                        'Reset on Copy': yup.string().required('required'),
                        'Log Mode': yup.string().required('required'),
                        'Edit Rules': yup.array().of(
                            yup.object({
                                'Is Editable': yup.string().required('required'),
                                "Roles": yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Constraints": yup.array().of(
                                    yup.object({
                                        "Type": yup.string().required('required'),
                                        "Name": yup.string().required('required'),
                                        "Values": yup.array().of(
                                            yup.string().required('required')
                                        )
                                    })
                                )
                            })
                        ),
                        'Update Rules': yup.array().of(
                            yup.object({
                                'Is Allowed': yup.string().required('required'),
                                "Values": yup.array().of(
                                    yup.string().required('required')
                                ),
                                "Constraints": yup.array().of(
                                    yup.object({
                                        "Type": yup.string().required('required'),
                                        "Name": yup.string().required('required'),
                                        "Values": yup.array().of(
                                            yup.string().required('required')
                                        )
                                    })
                                )
                            })
                        )
                    })
                )
            })
        )
    })
})
