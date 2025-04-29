import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormHandler } from '../utils/formHandler';

const SuggestionBox: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
    const formHandler = useFormHandler({}, (values: any) => {
        console.log('Callback executed with values:', values);
    }); // Call the hook here

    const onSubmit = async (data: any) => {
        try {
            await formHandler.handleSubmit(data);
            console.log('Callback executed with values:', data);
            const response = { error: false }; // Mock response to match expected type
            if (!response?.error) {
                setSubmissionStatus('Thank you for your suggestion!');
            } else {
                setSubmissionStatus('There was an error. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting suggestion:', error);
            setSubmissionStatus('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md doodle-background">
            <h1 className="text-2xl font-handwritten mb-4">Suggestion Box</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <label className="mb-2">
                    Name:
                    <input 
                        type="text" 
                        {...register('name', { required: true })} 
                        className={`border rounded p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} 
                    />
                </label>
                {errors.name && <span className="text-red-500">This field is required</span>}

                <label className="mb-2">
                    Project Idea:
                    <textarea 
                        {...register('idea', { required: true })} 
                        className={`border rounded p-2 ${errors.idea ? 'border-red-500' : 'border-gray-300'}`} 
                    />
                </label>
                {errors.idea && <span className="text-red-500">This field is required</span>}

                <label className="mb-2">
                    Email (optional):
                    <input 
                        type="email" 
                        {...register('email')} 
                        className="border rounded p-2 border-gray-300" 
                    />
                </label>

                <button type="submit" className="mt-4 bg-teal-500 text-white rounded p-2 hover:bg-teal-600">
                    Submit
                </button>
            </form>
            {submissionStatus && <p className="mt-4">{submissionStatus}</p>}
        </div>
    );
};

export default SuggestionBox;