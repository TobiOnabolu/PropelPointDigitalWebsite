import { BlogButton, SolidButton, TransparentButton} from '../components/buttons'
import { Text, Title } from '../components/text'
import { BackgroundBlur } from '../components/backgroundBlur'
import { TextContainer, FlexContainer, MainContentContainer } from '../components/containers'

export default function HeroSection() {

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <BackgroundBlur sign='-' topOffset='40' mobileTopOffset='80' leftOffset='[calc(50%-11rem)]' rotateDegrees='30' mobileLeftOffset='[calc(50%-30rem)]'  />
      <MainContentContainer>
        <TextContainer alignment="center">
          <Title>Unleash your business potential</Title>
          <Text>Leverage our expertise to drive real results and amplify your online presence</Text>
          <FlexContainer marginTop="10" horizontalAlignment="center" verticalAlignment="center" horizontalItemSpacing="6">
            <SolidButton />
            <TransparentButton />
          </FlexContainer>
        </TextContainer>
      </MainContentContainer>
      <BackgroundBlur sign='' topOffset='[calc(100%-13rem)]' mobileTopOffset='[calc(100%-30rem)]' leftOffset='[calc(50%+3rem)]' rotateDegrees='0' mobileLeftOffset='[calc(50%+36rem)]'  />
    </div>
  )
}