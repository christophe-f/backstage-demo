import React from 'react';
import { Content, Header, Page } from "@backstage/core-components";
import { Grid } from "@material-ui/core";
import {HomePageToolkit} from "@backstage/plugin-home";
import GitHubIcon from '@material-ui/icons/GitHub';
export const HomePage = () => {

    return (
        <Page themeId="home">
            <Header title="Welcome back!" />
            <Content>
                <Grid item xs={12} md={12}>
                    <HomePageToolkit
                        tools={[
                            {
                            url: 'https://github.com',
                            label: 'GitHub',
                            icon: <GitHubIcon />,
                            }
                        ]}
                    />
                </Grid>
            </Content>
        </Page>
    );
};

