package pl.homestead.domain.entity;

import lombok.Data;
import pl.homestead.domain.entity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Przechowyje dane użytkownika.
 */
@Data
@Entity
@Table(name = "user_table")
public class User extends BaseEntity {

    private String login;
    private String firstName;
    private String lastName;
    private String password;
}
