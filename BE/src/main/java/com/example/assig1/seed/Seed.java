package com.example.assig1.seed;

import com.example.assig1.model.Question;
import com.example.assig1.model.Tag;
import com.example.assig1.model.User;
import com.example.assig1.persistence.api.QuestionRepository;
import com.example.assig1.persistence.api.RepositoryFactory;
import com.example.assig1.persistence.api.TagRepository;
import com.example.assig1.persistence.api.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Component
@RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class Seed implements CommandLineRunner {
    private final RepositoryFactory factory;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception
    {

        /*QuestionRepository questionRepository = factory.createQuestionRepository();
        UserRepository userRepository = factory.createUserRepository();

        userRepository.save(new User("Alex M", passwordEncoder.encode("salam"), "A.B@example.com"));
        userRepository.save(new User("C", passwordEncoder.encode("D"), "C.D@example.com"));
        userRepository.save(new User("E", passwordEncoder.encode("F"), "E.F@example.com"));

        userRepository.save(new User("AB", passwordEncoder.encode("AB"), "E.F@example.com"));

        Date date1 = new Date();
        questionRepository.save(new Question(1,"SD problem", "Intellij won't se lombok plugin",date1));

        Date date2 = new Date();
        questionRepository.save(new Question(1,"Null pointer Exception", "Didn't use optional so rip...How to refactor?",date2));

        Date date3 = new Date();
        questionRepository.save(new Question(2,"Test", "Testing how to use this platform",date3));*/




    }
}
