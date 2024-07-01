'use client'

import { Box, Button, Flex, Text } from "@kuma-ui/core";
import React, {FC, useState} from 'react';

type Props = {
    count: number;
}
export const DuplicateButton:FC<Props> = ({ count }: Props) => {
    return (
        <Box position="relative" display="inline-block">
            <Flex
                width={80}
                height={40}
                backgroundColor="lightblue"
                borderRadius="8px"
                paddingLeft={5}
                paddingRight={20}
                border="none"
                cursor="pointer"
                justifyContent={"flex-start"}
                alignItems={"center"}
            >
                <Text>
                    おすすめ
                </Text>
            </Flex>
            <Box
                position="absolute"
                top="8px"
                right="4px"
                width="24px"
                height="24px"
                backgroundColor="red"
                color="white"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="12px"
                fontWeight="bold"
            >
                {count}
            </Box>
        </Box>
    );
};
