package <%= domain %>.biz.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OAuthTokenFormatDTO {
    private String accessToken;
    private String refreshToken;
}
