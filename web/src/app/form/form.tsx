'use client'

import { Box, Button, Input, Text } from "@kuma-ui/core";
import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    communication: z.enum(['最高', '高い', '普通', '低い', '最低'], {
        required_error: '必須項目です',
    }),
    technical: z.enum(['最高', '高い', '普通', '低い', '最低'], {
        required_error: '必須項目です',
    }),
    comment: z.string().min(0, { message: 'コメントを入力してください' })
});

export const Form: FC = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => console.log(data);

    const communicationValue = watch('communication');
    const technicalValue = watch('technical');

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)} padding="20px">
            <Box marginBottom="20px">
                <Text marginBottom="10px" display="flex" alignItems="center">
                    コミュニケーション能力
                </Text>
                <Box display="flex" gap="10px">
                    {['最高', '高い', '普通', '低い', '最低'].map(option => (
                        <Button
                            key={option}
                            type="button"
                            onClick={() => setValue('communication', option)}
                            backgroundColor={communicationValue === option ? 'blue' : 'white'}
                            color={communicationValue === option ? 'white' : 'black'}
                            border="1px solid"
                            borderColor={communicationValue === option ? 'blue' : 'black'}
                        >
                            {option}
                        </Button>
                    ))}
                </Box>
                {errors.communication && <Box color="red">{errors.communication.message?.toString()}</Box>}
            </Box>

            <Box marginBottom="20px">
                <Text marginBottom="10px" display="block">技術スキル</Text>
                <Box display="flex" gap="10px">
                    {['最高', '高い', '普通', '低い', '最低'].map(option => (
                        <Button
                            key={option}
                            type="button"
                            onClick={() => setValue('technical', option)}
                            backgroundColor={technicalValue === option ? 'blue' : 'white'}
                            color={technicalValue === option ? 'white' : 'black'}
                            border="1px solid"
                            borderColor={technicalValue === option ? 'blue' : 'black'}
                        >
                            {option}
                        </Button>
                    ))}
                </Box>
                {errors.technical && <Box color="red">{errors.technical.message?.toString()}</Box>}
            </Box>

            <Box marginBottom="20px">
                <Text marginBottom="10px">コメント</Text>
                <Input
                    as="textarea"
                    {...register('comment')}
                    placeholder={"コメントを入力してください"}
                    width="100%"
                    padding="10px"
                    borderColor="black"
                    borderWidth="1px"
                    borderRadius="5px"
                />
                {errors.comment && <Box color="red">{errors.comment.message?.toString()}</Box>}
            </Box>

            <Button type="submit">送信</Button>
        </Box>
    );
};
