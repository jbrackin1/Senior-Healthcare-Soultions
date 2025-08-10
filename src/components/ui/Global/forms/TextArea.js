/** @format */
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
`;

const StyledLabel = styled.label`
	font-weight: 600;
	margin-bottom: 0.25rem;
	font-family: "Open Sans", sans-serif;
`;

const StyledTextArea = styled.textarea`
	padding: 0.5rem;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	font-family: "Open Sans", sans-serif;
	font-size: 1rem;
	resize: vertical;

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.accent};
		outline-offset: 2px;
	}
`;

const ErrorMessage = styled.span`
	color: red;
	font-size: 0.875rem;
	margin-top: 0.25rem;
`;

const TextArea = ({
	id,
	label,
	value,
	onChange,
	error,
	ariaLabel,
	...props
}) => {
	// id is required for label association if label is visible
	// aria-label used if no visible label provided (fallback)
	
	return (
		<Wrapper>
			{label ? (
				<StyledLabel htmlFor={id}>{label}</StyledLabel>
			) : (
				<StyledTextArea
					aria-label={ariaLabel}
					id={id}
					value={value}
					onChange={onChange}
					{...props}
				/>
			)}
			{label && (
				<StyledTextArea
					id={id}
					value={value}
					onChange={onChange}
					aria-invalid={!!error}
					aria-describedby={error ? `${id}-error` : undefined}
					{...props}
				/>
			)}
			{error && <ErrorMessage id={`${id}-error`}>{error}</ErrorMessage>}
		</Wrapper>
	);
};

export default TextArea;
