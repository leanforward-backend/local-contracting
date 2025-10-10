import React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface ContractInvitationProps {
    name?: string;
    email?: string;
    message?: string;
    questions?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const ContractInvitation = ({
    name = 'there',
    email = '',
    message = '',
    questions = ''
}: ContractInvitationProps) => {
    return (
        <Html>
            <Head />
            <Preview>Thanks for contacting Toby Crust - I'll get back to you soon!</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto bg-white px-2 font-sans">
                    <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
                        <Section className="mt-[32px]">
                            <Text className="text-[14px] text-black leading-[24px]">
                                Hey {name}, thanks for reaching out!
                            </Text>
                            <Text className="text-[14px] text-black leading-[24px]">
                                I received your message and will get back to you within three business days.
                            </Text>

                            <Text className="text-[14px] text-black leading-[24px] font-semibold mt-4">
                                Your message:
                            </Text>
                            <Text className="text-[14px] text-gray-600 leading-[24px] bg-gray-50 p-3 rounded">
                                {message}
                            </Text>

                            {questions && (
                                <>
                                    <Text className="text-[14px] text-black leading-[24px] font-semibold mt-4">
                                        Your questions:
                                    </Text>
                                    <Text className="text-[14px] text-gray-600 leading-[24px] bg-gray-50 p-3 rounded">
                                        {questions}
                                    </Text>
                                </>
                            )}

                            <Text className="text-[14px] text-black leading-[24px] mt-4">
                                If you have any more questions, feel free to contact me:
                            </Text>
                            <Text className="text-[14px] text-black leading-[24px]">
                                📧 <strong>Email:</strong> tobycrust@gmail.com
                            </Text>
                            <Text className="text-[14px] text-black leading-[24px]">
                                📱 <strong>Phone:</strong> 042 5843 487
                            </Text>

                            <Text className="text-[14px] text-black leading-[24px] mt-6">
                                Best regards,
                                <br />
                                Toby Crust
                            </Text>
                            <Section className="mt-6">
                                <Button
                                    className="rounded bg-[#000000] px-5 py-3 text-center font-semibold text-[12px] text-white no-underline"
                                    href="https://local-contracting-3rahxawzo-leanforward-backends-projects.vercel.app/"
                                >
                                    Visit My Website
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
