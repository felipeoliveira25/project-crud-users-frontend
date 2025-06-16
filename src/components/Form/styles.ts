'use client'
import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    width: 30rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 50px 40px 40px 40px;
    background-color: #ffffff;
    box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
      0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
      0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    font-family: "Inter", sans-serif;
`

export const ContainerTitle = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 2rem;
`

export const Title = styled.span`
  margin: 0;
    font-size: 1.6rem;
    font-weight: 700;
    color: #212121;
`

export const Subtitle = styled.span`
  font-size: 1rem;
    max-width: 80%;
    text-align: center;
    line-height: 1.1rem;
    color: #8B8E98
`

