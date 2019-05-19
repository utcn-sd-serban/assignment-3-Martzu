package com.example.assig1.service;

import com.example.assig1.dto.QuestionDTO;
import com.example.assig1.model.Question;
import com.example.assig1.model.QuestionTag;
import com.example.assig1.model.Tag;
import com.example.assig1.persistence.api.RepositoryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import javax.management.QueryEval;
import javax.transaction.Transactional;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class QuestionService {

    private final RepositoryFactory repositoryFactory;

    /*@Transactional
    public List<Question> listAllQuestions()
    {
        return repositoryFactory.createQuestionRepository().findAll();
    }*/

    @Transactional
    public List<QuestionDTO> listAllQuestions()
    {
        List <QuestionDTO> questionsDTO = new ArrayList<>();
        List <Question> questions = repositoryFactory.createQuestionRepository().findAll();

        questions.forEach(question -> {
            String user = !repositoryFactory.createUserRepository().findById(question.getUserId()).isPresent() ? "Unknown" : repositoryFactory.createUserRepository().findById(question.getUserId()).get().getFullName() ;
            String tags = "";
            for (QuestionTag questionTag : repositoryFactory.createQuestionTagRepository().
                    findAll()
                    .stream()
                    .filter((QuestionTag questionTag) ->
                            questionTag.getQuestionId() == question.getId())
                    .collect(Collectors.toCollection(ArrayList::new)))
            {
                tags += repositoryFactory.createTagRepository().findById(questionTag.getTagId()).get().toString() + " ";

            }

            questionsDTO.add(QuestionDTO.ofEntity(question, user, tags));

        });

        return questionsDTO;

    }

    @Transactional
    public void removeQuestion(Question question)
    {
        repositoryFactory.createQuestionRepository().remove(question);
    }

    /*
    @Transactional//use it for both insert and update
    public Question saveQuestion(Question question)
    {
        return repositoryFactory.createQuestionRepository().save(question);
    }
    */

    @Transactional
    public Question saveQuestion(QuestionDTO questionDTO) throws ParseException
    {

        Date date = new Date(Long.parseLong(questionDTO.getDate()));
        //Question question = new Question(Integer.parseInt(questionDTO.getUser()), questionDTO.getTitle(), questionDTO.getText(), date);

        String tags[] = questionDTO.getTags().split(",");
        System.out.println(tags.length);
        Question question = new Question(Integer.parseInt(questionDTO.getUser()), questionDTO.getTitle(), questionDTO.getText(), date);
        repositoryFactory.createQuestionRepository().save(question);
        for(String tag : tags)
        {
            if (!repositoryFactory.createTagRepository().findByText(tag).isPresent())
            {
                Tag newTag = new Tag(tag);
                repositoryFactory.createTagRepository().save(newTag);
            }
            repositoryFactory.createQuestionTagRepository().save(new QuestionTag(question.getId(), repositoryFactory.createTagRepository().findByText(tag).get().getId()));
        }
        return question;
    }

    @Transactional
    public Optional<Question> findById(int id)
    {
        return repositoryFactory.createQuestionRepository().findById(id);
    }


    @Transactional
    public List<Question> findAll()
    {
        return repositoryFactory.createQuestionRepository().findAll();
    }

    @Transactional
    public Optional<Question> searchByTitle(String title)
    {
        return repositoryFactory.createQuestionRepository().searchByTitle(title);
    }


    //TODO search for question(dupa nume) -- cauti hashmpapu pana se rupe si gasesti questionu


}
