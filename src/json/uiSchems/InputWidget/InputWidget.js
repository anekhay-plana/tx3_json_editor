import {TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from 'yup'
import {useEffect} from "react";

const InputWidget = (props) => {
    const {value, label, schema} = props
    const generateValidation = (validation) => {
        switch (validation.type) {
            case "url":
                return (
                    yup.object({
                        [label]: yup.string()
                            .url()
                            .required('required'),
                    })
                )
            case "string":
                return (
                    yup.object({
                        [label]: yup.string()
                            .max(validation.maxLength, 'Too Long!')
                            .min(validation.minLength, 'Too Short!')
                            .required('required'),
                    })
                )
            case "number":
                return (
                    yup.object({
                        [label]: yup.string()
                            .matches('^\\d+$', label + " must match the following: [0-9] ")
                            .required('required'),
                    })
                )
        }
    }

    useEffect(() => {
        if (!formik.values.text) {
            formik.setFieldValue(label, value)
        }
    }, [value])

    const validationSchema = generateValidation(schema.validation)

    const formik = useFormik({
        initialValues: {
            label: label,
            [label]: value
        },
        validateOnBlur: true,
        validationSchema: validationSchema,
        onSubmit: null
    });


    const handleChange = (e) => {
        props.onChange(e.target.value)
        formik.handleChange(e);
        formik.setFieldTouched(label);
    }

    return (
        <div>
            <TextField
                fullWidth
                name={formik.values.label}
                label={formik.values.label}
                value={formik.values[label]}
                onChange={handleChange}
                error={formik.touched[label] && Boolean(formik.errors[label])}
                helperText={formik.touched[label] && formik.errors[label]}
            />
        </div>
    );
};
export default InputWidget
