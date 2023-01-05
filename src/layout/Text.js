import React from 'react'
import {Text as TXT ,View} from 'react-native'
import {style as styles} from '../styles/index'

export const Text = ({children,style,})=>{
    return(
        <TXT style={{...styles.text,...style}} >
            {children}
        </TXT>
    )
}

export const GrayText = ({children,style,})=>{
    return(
        <TXT style={{...styles.grayText,...style}} >
            {children}
        </TXT>
    )
}

export const Bold = ({style,children})=>{
    return(
        <TXT style={{...styles.bold,...style}} >
            {children}
        </TXT>
    )
}


export const SemiBold = ({children,style})=>{
    return(
        <TXT style={{...styles.semiBold,...style }} >
            {children}
        </TXT>
    )
}