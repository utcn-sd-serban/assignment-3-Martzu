package com.example.assig1.command;


import com.example.assig1.dto.QuestionDTO;
import com.example.assig1.exception.UserNotFoundException;
import com.example.assig1.model.Question;
import com.example.assig1.model.User;
import com.example.assig1.service.QuestionService;
import com.example.assig1.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Component
public class CommandHandler {


    private final UserService userService;

    private final QuestionService questionService;

    private final PasswordEncoder passwordEncoder;


    public List execute(String command, Object argument) throws ParseException {
        if(command.equals("getUsers"))
        {
            return userService.findAll();
        }

        if(command.equals("login"))
        {
            //argument1 represents the name of the user passed from the controller
            //argument2 represents the password of the user from the controller
            User dbUser = userService.findUserByName(((User) argument).getFullName()).get();

            if(!passwordEncoder.matches(((User) argument).getPassword(), dbUser.getPassword()))
            {
                throw new UserNotFoundException();
            }
        }

        if(command.equals("addUser"))
        {
            User newUser = ((User) argument);
            newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
            List<User> singleUser = new ArrayList<>();
            singleUser.add(userService.saveUser(newUser));
            return singleUser;
        }

        if(command.equals("getQuestions"))
        {
            return questionService.listAllQuestions();
        }

        if(command.equals("addQuestion"))
        {
            QuestionDTO questionDTO = ((QuestionDTO) argument);
            List<Question> singleQuestion = new ArrayList<>();
            singleQuestion.add(questionService.saveQuestion(questionDTO));
            return singleQuestion;

        }

        return new ArrayList();
    }

}
