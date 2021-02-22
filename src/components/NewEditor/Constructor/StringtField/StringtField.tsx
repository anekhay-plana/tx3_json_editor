import {TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from "yup";
import {useEffect} from "react";

interface Props {
    field: any
    json?: any
    name?: string|number
    onChange: any
}

const StringField: React.FC<Props> = ({field, json, name,onChange}) => {

    const formik = useFormik({
        initialValues: {
            label: typeof name === 'string'? name : '',
            value: json
        },
        validateOnBlur: true,
        validationSchema: yup.object({
            'value':field
        }),
        onSubmit: () => {
        }
    });

    useEffect(() => {
        formik.setFieldValue('value', json)
    }, [json])

    const handleChange = (e) => {
        formik.handleChange(e);
        formik.setFieldTouched('value');
        onChange(name,e.target.value)
    }

    return (
        <div>
            <TextField
                fullWidth
                name={'value'}
                label={formik.values.label}
                value={formik.values.value}
                onChange={handleChange}
                error={formik.touched.value && Boolean(formik.errors.value)}
                helperText={formik.touched.value && formik.errors.value}
            />
        </div>
    )
}

export default StringField
