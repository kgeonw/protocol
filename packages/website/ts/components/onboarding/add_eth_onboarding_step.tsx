import * as React from 'react';
import { Container } from 'ts/components/ui/container';
import { Text } from 'ts/components/ui/text';

export interface AddEthOnboardingStepProps {
    hasEth: boolean;
}

export const AddEthOnboardingStep: React.StatelessComponent<AddEthOnboardingStepProps> = props =>
    props.hasEth ? (
        <div className="flex items-center flex-column">
            <Text> Great! Looks like you already have ETH in your wallet.</Text>
            <Container marginTop="15px" marginBottom="15px">
                <img src="/images/ether_alt.svg" height="50px" width="50px" />
            </Container>
        </div>
    ) : (
        <div className="flex items-center flex-column">
            <Text> Before you begin you will need to send some ETH to your wallet.</Text>
            <Container marginTop="15px" marginBottom="15px">
                <img src="/images/ether_alt.svg" height="50px" width="50px" />
            </Container>
            <Text className="xs-hide">
                Click on the <img src="/images/metamask_icon.png" height="20px" width="20px" /> metamask extension in
                your browser and click either <b>BUY</b> or <b>DEPOSIT</b>.
            </Text>
        </div>
    );
