import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${(props) => props.theme.typography.font};
    color: ${(props) => props.theme.typography.body.color};
    font-size: ${(props) => props.theme.typography.body.fontSize};
    font-style: ${(props) => props.theme.typography.body.fontStyle};
    font-weight: ${(props) => props.theme.typography.body.fontWeight};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }

  h1 {
    color: ${(props) => props.theme.typography.heading1.color};
    font-size: ${(props) => props.theme.typography.heading1.fontSize};
    font-style: ${(props) => props.theme.typography.heading1.fontStyle};
    font-weight: ${(props) => props.theme.typography.heading1.fontWeight};
    line-height: ${(props) => props.theme.typography.heading1.lineHeight};
    margin: 0;
  }

  h2 {
    color: ${(props) => props.theme.typography.heading2.color};
    font-size: ${(props) => props.theme.typography.heading2.fontSize};
    font-style: ${(props) => props.theme.typography.heading2.fontStyle};
    font-weight: ${(props) => props.theme.typography.heading2.fontWeight};
    line-height: ${(props) => props.theme.typography.heading2.lineHeight};
    margin: 0;
  }

  h3, h4, h5, h6 {
    color: ${(props) => props.theme.typography.heading3.color};
    font-size: ${(props) => props.theme.typography.heading3.fontSize};
    font-style: ${(props) => props.theme.typography.heading3.fontStyle};
    font-weight: ${(props) => props.theme.typography.heading3.fontWeight};
    line-height: ${(props) => props.theme.typography.heading3.lineHeight};
    margin: 0;
  }

  a {
    color: ${(props) => props.theme.typography.hyperlink.color};
    font-size: ${(props) => props.theme.typography.hyperlink.fontSize};
    font-style: ${(props) => props.theme.typography.hyperlink.fontStyle};
    font-weight: ${(props) => props.theme.typography.hyperlink.fontWeight};
    line-height: ${(props) => props.theme.typography.hyperlink.lineHeight};
  }

  button {
    color: ${(props) => props.theme.typography.button.color};
    cursor: pointer;
    font-family: ${(props) => props.theme.typography.font};
    font-size: ${(props) => props.theme.typography.button.fontSize};
    font-weight: ${(props) => props.theme.typography.button.fontWeight};
    line-height: ${(props) => props.theme.typography.button.lineHeight};
    text-align: ${(props) => props.theme.typography.button.textAlign};
    text-transform: ${(props) => props.theme.typography.button.textTransform};
    transition: ${(props) => props.theme.animations.buttons.transition};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 6px;
  }

  input, textarea {
    color: ${(props) => props.theme.typography.fieldInput.color};
    font-family: ${(props) => props.theme.typography.font};
    font-size: ${(props) => props.theme.typography.fieldInput.fontSize};
    font-style: ${(props) => props.theme.typography.fieldInput.fontStyle};
    font-weight: ${(props) => props.theme.typography.fieldInput.fontWeight};
    line-height: ${(props) => props.theme.typography.fieldInput.lineHeight};
  }

  label {
    color: ${(props) => props.theme.typography.fieldLabel.color};
    font-size: ${(props) => props.theme.typography.fieldLabel.fontSize};
    font-style: ${(props) => props.theme.typography.fieldLabel.fontStyle};
    font-weight: ${(props) => props.theme.typography.fieldLabel.fontWeight};
    line-height: ${(props) => props.theme.typography.fieldLabel.lineHeight};
    text-transform: ${(props) =>
      props.theme.typography.fieldLabel.textTransform};
  }

  caption {
    color: ${(props) => props.theme.typography.helpText.color};
    font-size: ${(props) => props.theme.typography.helpText.fontSize};
    font-style: ${(props) => props.theme.typography.helpText.fontStyle};
    font-weight: ${(props) => props.theme.typography.helpText.fontWeight};
    line-height: ${(props) => props.theme.typography.helpText.lineHeight};
  }
`
