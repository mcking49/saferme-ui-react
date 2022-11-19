import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${props => props.theme.typography.font};
    color: ${props => props.theme.typography.body.color};
    font-size: ${props => props.theme.typography.body.fontSize};
    font-style: ${props => props.theme.typography.body.fontStyle};
    font-weight: ${props => props.theme.typography.body.fontWeight};
    line-height: ${props => props.theme.typography.body.lineHeight};
  }

  h1 {
    color: ${props => props.theme.typography.heading1.color};
    font-size: ${props => props.theme.typography.heading1.fontSize};
    font-style: ${props => props.theme.typography.heading1.fontStyle};
    font-weight: ${props => props.theme.typography.heading1.fontWeight};
    line-height: ${props => props.theme.typography.heading1.lineHeight};
  }

  h2, h3, h4, h5, h6 {
    color: ${props => props.theme.typography.heading2.color};
    font-size: ${props => props.theme.typography.heading2.fontSize};
    font-style: ${props => props.theme.typography.heading2.fontStyle};
    font-weight: ${props => props.theme.typography.heading2.fontWeight};
    line-height: ${props => props.theme.typography.heading2.lineHeight};
  }

  a {
    color: ${props => props.theme.typography.hyperlink.color};
    font-size: ${props => props.theme.typography.hyperlink.fontSize};
    font-style: ${props => props.theme.typography.hyperlink.fontStyle};
    font-weight: ${props => props.theme.typography.hyperlink.fontWeight};
    line-height: ${props => props.theme.typography.hyperlink.lineHeight};
  }

  label {
    color: ${props => props.theme.typography.fieldLabel.color};
    font-size: ${props => props.theme.typography.fieldLabel.fontSize};
    font-style: ${props => props.theme.typography.fieldLabel.fontStyle};
    font-weight: ${props => props.theme.typography.fieldLabel.fontWeight};
    line-height: ${props => props.theme.typography.fieldLabel.lineHeight};
    text-transform: ${props => props.theme.typography.fieldLabel.textTransform};
  }

  caption {
    color: ${props => props.theme.typography.helpText.color};
    font-size: ${props => props.theme.typography.helpText.fontSize};
    font-style: ${props => props.theme.typography.helpText.fontStyle};
    font-weight: ${props => props.theme.typography.helpText.fontWeight};
    line-height: ${props => props.theme.typography.helpText.lineHeight};
  }
`