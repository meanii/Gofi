import { RiLoader2Line } from '@hacknug/react-icons/ri'
import { RouteComponentProps } from '@reach/router'
import React from 'react'
import logo from '../assets/logo.svg'

interface IProps extends RouteComponentProps {}

const defualtProps: IProps = {}

const Loading: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="animate-fadein p-2 bg-white opacity-70 w-full h-full flex flex-col items-center justify-center  text-black space-y-4">
                <img src={logo} className="w-20" />
                <RiLoader2Line className="motion-safe:animate-spin-slow text-4xl" />
                <span>Gofi is loading...</span>
            </div>
        </>
    )
}

Loading.defaultProps = defualtProps

export default Loading
