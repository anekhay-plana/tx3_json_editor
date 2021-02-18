import {TextField} from "@material-ui/core";
import {useFormik} from "formik";
import * as yup from "yup";

interface Props {
    field: any
    json: any
    name?: string
}

const StringField: React.FC<Props> = ({field, json, name}) => {

    const formik = useFormik({
        initialValues: {
            label: name,
            value: json
        },
        validateOnBlur: true,
        validationSchema: yup.object({
            'value':field
        }),
        onSubmit: () => {
        }
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        formik.setFieldTouched('value');
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
