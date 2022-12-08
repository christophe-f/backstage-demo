import React from 'react';
import { Content, Header, Page } from "@backstage/core-components";
import { Grid } from "@material-ui/core";
import {HomePageToolkit} from "@backstage/plugin-home";
import GitHubIcon from '@material-ui/icons/GitHub';
import ArgoCDIcon from "./ArgoCDIcon";
import OpenShiftIcon from "./OpenShiftIcon";
import QuayIcon from "./QuayIcon";
export const HomePage = () => {

    return (
        <Page themeId="home">
            <Header title="Welcome back!" />
            <Content>
                <Grid item xs={12} md={12}>
                    <HomePageToolkit
                        title={'Quick Links'}
                        tools={[
                            {
                            url: 'https://github.com/orgs/redhat-backstage-demo/repositories',
                            label: 'GitHub',
                            icon: <GitHubIcon />,
                            },
                            {
                                url: 'https://user1-argo-server-user1-argocd.apps.cluster-wsftt.wsftt.sandbox2455.opentlc.com/',
                                label: 'ArgoCD',
                                icon: <ArgoCDIcon />,
                            },
                            {
                                url: 'https://console-openshift-console.apps.cluster-wsftt.wsftt.sandbox2455.opentlc.com/',
                                label: 'OpenShift',
                                icon: <OpenShiftIcon />,
                            },
                            {
                                url: 'https://quay.io/user/jfargett',
                                label: 'Quay.io',
                                icon: <QuayIcon />,
                            },
                        ]}
                    />
                </Grid>
            </Content>
        </Page>
    );
};

