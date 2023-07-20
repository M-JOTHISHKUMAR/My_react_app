import {Box,Heading,HStack,Tag,TagLabel,Text,VStack,Wrap,UnorderedList,ListItem,} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";

const ResumePreview = () => {
  const { theme, about, educationList, skills, projects, printElem } =
    useResume();
    const imgStyle = {
      width:"100",
      height:"100px",
      margin:"15px",
      borderRadius: "40%",
    };
  return (
    <>
      <Box
        bg={"white"}
        w={"full"}
        rounded={"md"}
        shadow={"md"}
        overflow={"hidden"}
        minH={"100vh"}
      >
        <div ref={printElem}>
          <HStack>
            {about.picture && (
              <img
                style={imgStyle}
                
                src={about.picture}
                alt="avatar"
              />
            )}

            <VStack m={4} alignItems={"start"} spacing={0.5}>
              <Heading as="h4" size="md">
                {about.name ? about.name : "Name"}
              </Heading>
              <Text color={"gray.500"}>
                {about.role ? about.role : "Role"}
              </Text>
            </VStack>
          </HStack>

          <HStack
            bg={theme}
            color={"white"}
            p={4}
            justifyContent={"space-between"}
          >
            <HStack spacing={1}>
              <MdMail />{" "}
              <Text><bold>{about.email ? about.email : "Email"}</bold></Text>
            </HStack>
            <HStack spacing={1}>
              <MdLocalPhone />{" "}
              <Text><bold>{about.phone ? about.phone : "phno"}</bold></Text>
            </HStack>
            <HStack spacing={1}>
              <MdLocationPin />{" "}
              <Text>{about.address ? about.address : "State"}</Text>
            </HStack>
            <HStack spacing={1}>
            </HStack>
          </HStack>

          <HStack
          >
            <VStack mx={2} alignItems={"start"} w={"full"} spacing={6}>
              
              
              <VStack alignItems={"start"}>
                <Heading as="h4" size="md" color={"red.700"}>
                  EDUCATION
                </Heading>

                {educationList.map((education) => {
                  const { degree, school, startYr, endYr, grade } = education;

                  return (
                    <VStack
                      spacing={0}
                      alignItems={"right"}
                      w={"full"}
                      pb={2}
                    >
                      <Text fontWeight={"medium"}>
                        {degree ? degree : "Course"}
                      </Text>
                      <Text fontSize={"sm"}>
                        {school ? school : "College Name"}
                      </Text>
                      <HStack
                        fontSize={"xs"}
                        fontStyle={"italic"}
                        justifyContent={"space-between"}
                        w={"full"}
                      >
                        <Text>
                          {startYr ? startYr : 2021} - {endYr ? endYr : 2025}
                        </Text>
                        <Text>{grade ? grade : "CGPA"}</Text>
                      </HStack>
                    </VStack>
                  );
                })}
              </VStack>
            </VStack>

            <VStack mx={2} alignItems={"start"} w={"full"} spacing={6}>
              
              
              <VStack alignItems={"right"}>
                <Heading as="h4" size="md" color={"gray.700"}>
                  SKILLS
                </Heading>
                <Wrap>
                  {skills.map((skill, index) => (
                    <Tag
                      size={"md"}
                      borderRadius="md"
                      variant="solid"
                      bg={theme.replace("400", "500")}
                      key={index}
                    >
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ))}
                </Wrap>
              </VStack>

              
              <VStack alignItems={"right"}>
                <Heading as="h4" size="md" color={"gray.700"}>
                  PROJECTS
                </Heading>

                {projects.map((project) => {
                  const { name, url,} = project;
                  return (
                    <VStack
                      spacing={0.5}
                      alignItems={"right"}
                      lineHeight={1.3}
                      pb={2}
                    >
                      <HStack as="a" href={url} target="_blank" spacing={0.5}>
                        <Text fontWeight={"medium"} flex={"row"}>
                          {name ? name : "Project Name"}{" "}
                        </Text>{" "}
                      </HStack>
                      <UnorderedList pl={5}>
                        <ListItem>
                          <Text fontSize={"sm"} as="p">
                            <p>Enter your project name</p>
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  );
                })}
              </VStack>
              
              
              </VStack>
          </HStack>
        </div>
      </Box>
    </>
  );
};

export default ResumePreview;
