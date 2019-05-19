package com.example.assig1.dto;

import com.example.assig1.model.Question;
import com.example.assig1.model.User;
import com.example.assig1.service.UserService;
import lombok.Data;

import java.util.Date;
@Data
public class QuestionDTO {

    private int id;
    private String user;
    private String title;
    private String text;
    private String tags;
    private String date;

    public QuestionDTO() {
    }

    public QuestionDTO(int id, String user, String title, String text, String tags, String date) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }

    public static QuestionDTO ofEntity(Question question, String user, String tags)
    {
        QuestionDTO questionDTO = new QuestionDTO();
        questionDTO.setId(question.getId());
        questionDTO.setUser(user);
        questionDTO.setTags(tags);
        questionDTO.setTitle(question.getTitle());
        questionDTO.setText(question.getText());
        questionDTO.setDate(question.getCreationDate().toString());
        return questionDTO;

    }
}
