import { useState } from 'react';

export const useFormHandler = (initialValues: any, submitCallback: (values: any) => void) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await submitCallback(formValues);
            setFormValues(initialValues);
        } catch {
            setError('Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formValues,
        isSubmitting,
        error,
        handleChange,
        handleSubmit,
    };
};

export default useFormHandler;