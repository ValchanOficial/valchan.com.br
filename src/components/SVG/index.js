import React from "react"

import Error404SVG from "./404.svg"
import Bird1SVG from "./bird-1.svg"
import Bird2SVG from "./bird-2.svg"
import Bird3SVG from "./bird-3.svg"
import Bird4SVG from "./bird-4.svg"
import ButterflySVG from "./butterfly.svg"
import CrownSVG from "./crown.svg"
import DeveloperSVG from "./developer.svg"
import FlowerSVG from "./flower.svg"
import RocketSVG from "./rocket.svg"
import StarsSVG from "./stars.svg"

import * as S from "./style"

const decorativeImg = { alt: "", role: "presentation", "aria-hidden": true }

const RestingBird = () => <S.RestingBird src={Bird1SVG} {...decorativeImg} />
const WaitingBird = () => <S.WaitingBird src={Bird2SVG} {...decorativeImg} />
const FlyingBird = () => <S.FlyingBird src={Bird3SVG} {...decorativeImg} />
const LovelyBird = () => <S.LovelyBird src={Bird4SVG} {...decorativeImg} />
const Butterfly = () => <S.Butterfly src={ButterflySVG} {...decorativeImg} />
const Crown = () => <S.Crown src={CrownSVG} {...decorativeImg} />
const Error404 = () => (
  <S.Error404 src={Error404SVG} alt="Ilustração de erro 404" />
)
const Rocket = () => <S.Rocket src={RocketSVG} {...decorativeImg} />
const Stars = () => <S.Stars src={StarsSVG} {...decorativeImg} />
const Developer = () => <S.Developer src={DeveloperSVG} {...decorativeImg} />
const Flower = () => <S.Flower src={FlowerSVG} {...decorativeImg} />

export {
  Butterfly,
  Crown,
  Developer,
  Error404,
  Flower,
  FlyingBird,
  LovelyBird,
  RestingBird,
  Rocket,
  Stars,
  WaitingBird,
}
