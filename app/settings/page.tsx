"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Option,
  Select,
} from "@yamada-ui/react";
import { useState } from "react";

const getDepartments = (faculty: string) => {
  switch (faculty) {
    case "情報科学部":
      return ["情報工学科", "知能工学科", "システム工学科", "医用情報科学科"];
    case "国際学部":
      return ["国際学科"];
    case "芸術学部":
      return ["美術学科", "デザイン工芸学科"];
    default:
      return;
  }
};

const Page = () => {
  const [faculty, setFaculty] = useState<string>("");

  const departments = getDepartments(faculty);

  return (
    <Flex>
      <Card variant="outline" bg="white" p="md" maxW="4xl">
        <CardHeader>
          <Heading size="xl">設定</Heading>
        </CardHeader>

        <CardBody>
          <Select placeholder="学年を選択">
            <Option value="学部1年">学部1年</Option>
            <Option value="学部2年">学部2年</Option>
            <Option value="学部3年">学部3年</Option>
            <Option value="学部4年">学部4年</Option>
            <Option value="修士1年">修士1年</Option>
            <Option value="修士2年">修士2年</Option>
          </Select>
          <Select
            placeholder="学部を選択"
            value={faculty}
            onChange={setFaculty}
          >
            <Option value="情報科学部">情報科学部</Option>
            <Option value="国際学部">国際学部</Option>
            <Option value="芸術学部">芸術学部</Option>
          </Select>
          {departments ? (
            <Select placeholder="学科を選択">
              {departments.map((department) => {
                return (
                  <Option key={department} value={department}>
                    {department}
                  </Option>
                );
              })}
            </Select>
          ) : (
            <Select placeholder="学科を選択" isDisabled></Select>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Page;
