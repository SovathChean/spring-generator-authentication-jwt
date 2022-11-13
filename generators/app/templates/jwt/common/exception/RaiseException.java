package <%= domain_name %>.common.exception;

import <%= domain_name %>.common.controller.ResponseMessage;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Data
public class RaiseException {
    public static void exception(HttpServletResponse response, String httpCode, String message) throws IOException {

        ResponseMessage<Exception> exception = new ResponseMessage<Exception>();
        exception.setResult(false);
        exception.setResultCode(httpCode);
        exception.setResultMessage(message);

        new ObjectMapper().writeValue(response.getOutputStream(), exception);
    }
}
