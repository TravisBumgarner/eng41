import React, { Component } from 'react'

import { Card, ExternalLink } from 'SharedComponents'

import {
    LearnMoreWrapper,
    GroupLinksWrapper,
    AllLinksWrapper,
    LinksListTitle
} from './LearnMore.styles'

export default class LearnMore extends Component {
    render() {
        return (
            <LearnMoreWrapper>
                <Card title="Learn More">
                    <AllLinksWrapper>
                        <GroupLinksWrapper>
                            <LinksListTitle>Engineering</LinksListTitle>
                            <ul>
                                <li>
                                    <ExternalLink
                                        primary
                                        href="https://www.instagram.com/travis_the_maker/"
                                    >
                                        Instagram
                                    </ExternalLink>
                                </li>
                                <li>
                                    <ExternalLink
                                        primary
                                        href="https://github.com/TravisBumgarner/"
                                    >
                                        Github
                                    </ExternalLink>
                                </li>
                                <li>
                                    <ExternalLink primary href="http://painlessprototyping.com/">
                                        Startup
                                    </ExternalLink>
                                </li>
                            </ul>
                        </GroupLinksWrapper>

                        <GroupLinksWrapper>
                            <LinksListTitle>Photography</LinksListTitle>
                            <ul>
                                <li>
                                    <ExternalLink
                                        primary
                                        href="https://travisbumgarner.photography/"
                                    >
                                        Portfolio
                                    </ExternalLink>
                                </li>
                                <li>
                                    <ExternalLink primary href="https://www.instagram.com/esafoto/">
                                        Instagram
                                    </ExternalLink>
                                </li>
                            </ul>
                        </GroupLinksWrapper>
                        <GroupLinksWrapper>
                            <LinksListTitle>Community</LinksListTitle>
                            <ul>
                                <li>
                                    <ExternalLink primary href="http://www.cambridgehackspace.com/">
                                        Cambridge Hackspace
                                    </ExternalLink>
                                </li>
                                <li>
                                    <ExternalLink primary href="https://sandbox.mit.edu/">
                                        MIT Sandbox
                                    </ExternalLink>
                                </li>
                                <li>
                                    <ExternalLink primary href="https://d-lab.mit.edu/">
                                        MIT D-Lab
                                    </ExternalLink>
                                </li>
                            </ul>
                        </GroupLinksWrapper>

                        <GroupLinksWrapper>
                            <LinksListTitle>Travel</LinksListTitle>
                            <ul>
                                <li>
                                    <ExternalLink primary href="http://mytravelsin.blogspot.com">
                                        Blog
                                    </ExternalLink>
                                </li>
                            </ul>
                        </GroupLinksWrapper>
                    </AllLinksWrapper>
                </Card>
            </LearnMoreWrapper>
        )
    }
}