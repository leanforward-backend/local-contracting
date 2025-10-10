import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';


const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const ContractInvitation = () => {

    return (
        <Html>
            <Head />
            <Preview>Preview Text</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
                        <Section className="mt-[32px]">
                            <Text className="text-[14px] text-black leading-[24px]">
                                Hey ___Person___, thanks for reaching out,
                            </Text>
                            <Text className="text-[14px] text-black leading-[24px]">
                                I will get back to you within three buisness days.
                            </Text>
                            <Text className="text-[14px] text-black leading-[24px]">
                                If you have any more questions, feel free to send me another email to
                            </Text>
                            <Text className='bold'>tobycrust@gmail.com</Text>
                            <Text className='bold'>Or send me a message</Text>
                            <Text> 042 5843 487</Text>

                            <Text className="text-[14px] text-black leading-[24px]">
                                Best regards,
                                <br />
                                Toby Crust
                            </Text>
                            <Section>
                                <Button className="rounded bg-[#000000] px-5 py-3 text-center font-semibold text-[12px] text-white no-underline" href={"https://local-contracting-3rahxawzo-leanforward-backends-projects.vercel.app/"}>
                                    Link back to my website
                                </Button>
                            </Section>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html >
    );
};

export default ContractInvitation;
