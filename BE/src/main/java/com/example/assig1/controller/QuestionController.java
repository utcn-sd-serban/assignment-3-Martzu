package com.example.assig1.controller;


import com.example.assig1.command.CommandHandler;
import com.example.assig1.dto.QuestionDTO;
import com.example.assig1.model.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class QuestionController
{
    private final CommandHandler handler;


    @GetMapping("/questions")
    public List<QuestionDTO> readAll() throws ParseException {

        return handler.execute("getQuestions", null);
    }

    @PostMapping("/questions")
    public Question create(@RequestBody QuestionDTO questionDTO) throws ParseException {
        return (Question) handler.execute("addQuestion", questionDTO).get(0);
    }
}
