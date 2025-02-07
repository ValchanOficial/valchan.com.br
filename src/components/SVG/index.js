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

const RestingBird = () => (
  <S.RestingBird src={Bird1SVG} alt="Pássaro de origami descansando" />
)
const WaitingBird = () => (
  <S.WaitingBird src={Bird2SVG} alt="Pássaro de origami esperando" />
)
const FlyingBird = () => (
  <S.FlyingBird src={Bird3SVG} alt="Pássaro de origami voando" />
)
const LovelyBird = () => (
  <S.LovelyBird src={Bird4SVG} alt="Pássaro de origami amável" />
)
const Butterfly = () => <S.Butterfly src={ButterflySVG} alt="Borboleta" />
const Crown = () => <S.Crown src={CrownSVG} alt="Coroa" />
const Error404 = () => <S.Error404 src={Error404SVG} alt="Erro 404" />
const Rocket = () => <S.Rocket src={RocketSVG} alt="Foguete" />
const Stars = () => <S.Stars src={StarsSVG} alt="Estrelas" />
const Developer = () => <S.Developer src={DeveloperSVG} alt="Desenvolvedora" />
const Flower = () => <S.Flower src={FlowerSVG} alt="Flor" />

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
