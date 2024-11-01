import styled from '@emotion/styled'

type InputProps = {
  type?: string
  placeholder?: string
}

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 8px;
  outline: none;
`

export const Input = ({ type, placeholder }: InputProps) => {
  return <SInput type={type} placeholder={placeholder}></SInput>
}
