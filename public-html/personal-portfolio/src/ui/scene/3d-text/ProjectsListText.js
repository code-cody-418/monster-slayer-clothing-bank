import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {ProjectsExamples} from "../ProjectsExamples";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";

export const ProjectsListText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 2.5;
    responsiveData.desktopPositionX = 0;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 0
    
    responsiveData.mobileSize = 1.5;
    responsiveData.mobilePositionX = 0;
    responsiveData.mobilePositionY = 5;
    responsiveData.mobilePositionZ = -2

    const { size, positionX, positionY, positionZ} = useResponsive(responsiveData);


    const FontConfig = ({text, position, rotation, uniqueColor}) => {
        const font = useLoader(THREE.FontLoader, "/Sunmore-Slant-Free-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: size,
                height: 0.2,
                curveSegments: 32,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }),
            [font]
        );
        const mesh = useRef();
        return (
            <>
                <group position={position} rotation={rotation}>
                    <mesh ref={mesh}>
                        <textGeometry args={[text, config]}/>
                        <meshBasicMaterial color={uniqueColor}/>
                    </mesh>
                </group>
            </>
        )
    }
    const ListText = () => {
       
        //Project Text
        const projectTextOne = "Project One"
        const projectTextTwo = "Project Two"
        const projectTextThree = "Project Three"

        //set the state of the example image
        const [exampleState, setExampleState] = useState(null)

        //color of text before being changed
        const startingColor = "rgb(122,158,248)"

        //allows each skill to change color
        const [projectOneColor, setProjectOneColor] = useState(startingColor)
        const [projectTwoColor, setProjectTwoColor] = useState(startingColor)
        const [projectThreeColor, setProjectThreeColor] = useState(startingColor)

        //Functionality to 30 second timer
        const [thirtySeconds, setThirtySeconds] = useState(30)
        const [timerOnOff, setTimerOnOff] = useState(true)

        useEffect(() => {
            if (timerOnOff === true) {
                if (thirtySeconds === -1) {
                    setThirtySeconds(30)
                } else if (thirtySeconds > -2) {
                    const intervalId = setInterval(() => {
                        setThirtySeconds(thirtySeconds => thirtySeconds - 1)
                    }, 1000)
                    // console.log("seconds", thirtySeconds)
                    return () => clearInterval(intervalId)
                }
            }
        }, [thirtySeconds, timerOnOff])

        useEffect(() => {
            if (timerOnOff === true) {
                if (thirtySeconds === 30) {
                    setExampleState("projectOneActive")
                    setProjectOneColor("#FFFFFF")
                    setProjectThreeColor(startingColor)
                } else if (thirtySeconds === 20) {
                    setExampleState("projectTwoActive")
                    setProjectTwoColor("#FFFFFF")
                    setProjectOneColor(startingColor)
                } else if (thirtySeconds === 10) {
                    setExampleState("projectThreeActive")
                    setProjectThreeColor("#FFFFFF")
                    setProjectTwoColor(startingColor)
                }
            }
        }, [exampleState, thirtySeconds, timerOnOff])

        //sets cursor on hover
        const [hovered, setHovered] = useState(false)
        useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

        return (
            <>
                <group
                    position={[positionX, positionY, positionZ]}

                >
                    <group
                        onClick={() => window.open("https://saiyanwebdev.com/")}
                        onPointerOver={() => {
                            setTimerOnOff(false)
                            setProjectOneColor("#2779F6")
                            setHovered(true)
                            setExampleState("projectOneActive")
                        }}
                        onPointerOut={() => {
                            setTimerOnOff(true)
                            setProjectOneColor(startingColor)
                            setHovered(false)
                        }}
                    >
                        <FontConfig
                            text={projectTextOne}
                            position={[-20, 2, 10]}
                            rotation={[0, 1.570796, 0]}
                            uniqueColor={projectOneColor}
                        />
                    </group>
                    <group
                        onClick={() => window.open("https://expninja.com/")}
                        onPointerOver={() => {
                            setTimerOnOff(false)
                            setProjectTwoColor("#2779F6")
                            setHovered(true)
                            setExampleState("projectTwoActive")
                        }}
                        onPointerOut={() => {
                            setTimerOnOff(true)
                            setProjectTwoColor(startingColor)
                            setHovered(false)
                        }}
                    >
                        <FontConfig
                            text={projectTextTwo}
                            position={[-20, -2, 10]}
                            rotation={[0, 1.570796, 0]}
                            uniqueColor={projectTwoColor}
                        />
                    </group>
                    <group
                        onClick={() => window.open("http://143.198.234.16/")}
                        onPointerOver={() => {
                            setTimerOnOff(false)
                            setProjectThreeColor("#2779F6")
                            setHovered(true)
                            setExampleState("projectThreeActive")
                        }}
                        onPointerOut={() => {
                            setTimerOnOff(true)
                            setProjectThreeColor(startingColor)
                            setHovered(false)
                        }}
                    >
                        <FontConfig
                            text={projectTextThree}
                            position={[-20, -6, 10]}
                            rotation={[0, 1.570796, 0]}
                            uniqueColor={projectThreeColor}
                        />
                    </group>
                </group>
                <ProjectsExamples
                    exampleState={exampleState}
                />
            </>
        )
    }
    return (
        <>
            <ListText/>
        </>
    )
}
