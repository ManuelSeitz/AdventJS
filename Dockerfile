FROM python:3.14-slim

ARG UID=1000
ARG GID=1000

RUN groupadd -g ${GID} group && \
    useradd -m -u ${UID} -g ${GID} user

WORKDIR /adventjs

RUN apt-get update && apt-get install -y curl git

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json .

RUN mkdir -p node_modules && chown -R user /adventjs

USER user

RUN npm install

COPY . .

EXPOSE 8888

CMD ["sleep", "infinity"]