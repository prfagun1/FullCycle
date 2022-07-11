FROM golang:alpine AS builder

WORKDIR /app
COPY app .

RUN go get -d -v
RUN go build -o app .


FROM scratch
COPY --from=builder /app .
ENTRYPOINT ["/app"]